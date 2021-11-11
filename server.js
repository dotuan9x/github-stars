const express = require('express');
const next = require('next');
const compression = require('compression');
const MobileDetect = require('mobile-detect');

require('dotenv').config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev,
    quiet: !dev
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(middleware);
    server.use(compression());

    // Route Category eq. https://meovathay.vn/giai-tri-c101.html
    server.get('/:slug-c:cid(\\d+).html', (req, res) => {
        return app.render(req, res, '/category/id', {
            slug: req.params.slug,
            cid: req.params.cid,
            page: req.query && req.query.page ? +req.query.page : 1
        });
    });

    // Route Hot news eq. https://meovathay.vn/tin-nong.html ===> Old route
    server.get('/tin-nong.html', (req, res) => {
        res.redirect(302, '/meo-vat-hay.html');
    });

    server.get('/meo-vat-hay.html', (req, res) => {
        return app.render(req, res, '/hot');
    });

    // Route latest news eq. https://meovathay.vn/tin-moi.html
    server.get('/tin-moi.html', (req, res) => {
        return app.render(req, res, '/latest');
    });

    // Route Post Detail eq. https://meovathay.vn/quay-phim-ban-ron-angela-baby-mang-theo-quy-tu-bot-bien-nho-sang-tan-rome-de-tien-cham-soc-p66457.html
    server.get('/:slug-p:pid(\\d+).html', (req, res) => {
        return app.render(req, res, '/post', {
            slug: req.params.slug,
            pid: req.params.pid
        });
    });

    // Route Tags eq. https://meovathay.vn/angela-baby.html
    server.get('/:slug.html', (req, res) => {
        return app.render(req, res, '/tag', {
            slug: req.params.slug
        });
    });

    // Route Search eq. https://meovathay.vn/search/?q=cam
    server.get('/search/?q=:search', (req, res) => {
        return app.render(req, res, '/search', {
            search: req.params.search
        });
    });

    // Route Sitemaps
    server.get('/sitemap/:name.xml', (req, res) => {
        try {
            const sitemapFolder = process.env.SITEMAP_FOLDER;

            if (req.params && req.params.name && sitemapFolder) {
                const fs = require('fs');

                res.setHeader('content-type','text/xml');

                const path = sitemapFolder + req.params.name + '.xml';

                if (fs.existsSync(path)) {
                    const file = fs.readFileSync(path);

                    res.write(file);
                    res.end();
                } else {
                    res.send({
                        'error': true
                    });
                }
            } else {
                res.send({
                    'error': true
                });
            }
        } catch (error) {
            res.send({
                'error': true
            });
        }
    });

    server.get('/:name.xml', (req, res) => {
        try {
            const sitemapFolder = process.env.SITEMAP_FOLDER;

            if (req.params && req.params.name && sitemapFolder) {
                const fs = require('fs');

                res.setHeader('content-type','text/xml');

                // const path = sitemapFolder + '../sitemap.xml';
                const path = sitemapFolder + '../' + req.params.name + '.xml';

                if (fs.existsSync(path)) {
                    const file = fs.readFileSync(path);

                    res.write(file);
                    res.end();
                } else {
                    res.send({
                        'error': true
                    });
                }

            } else {
                res.send({
                    'error': true
                });
            }
        } catch (error) {
            res.send({
                'error': true
            });
        }
    });

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) {
            throw err;
        }

        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});

function middleware(req, res, next) {
    let ua = req.headers['user-agent'];
    let md = req && new MobileDetect(ua);

    if (md.mobile() && !md.tablet() && req.originalUrl.indexOf('.xml') < 0) {
        // Mobile device
        res.redirect(302, 'https://m.meovathay.vn' + req.path);
    } else {
        next();
    }
}
