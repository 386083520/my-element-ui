import navConfig from './nav.config';

const LOAD_MAP = {
    'zh-CN': name => {
        return r => require.ensure([], () =>
                r(require(`./pages/zh-CN/${name}.vue`)),
            'zh-CN');
    }
}

const LOAD_DOCS_MAP = {
    'zh-CN': path => {
        return r => require.ensure([], () =>
                r(require(`./docs/zh-CN${path}.md`)),
            'zh-CN');
    }
}

const load = function(lang, path) {
    return LOAD_MAP[lang](path);
};
const loadDocs = function(lang, path) {
    return LOAD_DOCS_MAP[lang](path);
};
const registerRoute = (navConfig) => {
    let route = [];
    Object.keys(navConfig).forEach((lang, index) => {
        let navs = navConfig[lang];
        route.push({
            path: `/${ lang }/component`,
            // redirect: `/${ lang }/component/installation`,
            component: load(lang, 'component'),
            children: []
        });
        navs.forEach(nav => {
            if (nav.groups) {
                nav.groups.forEach(group => {
                    group.list.forEach(nav => {
                        addRoute(nav, lang, index);
                    })
                })
            }
        })
    })
    function addRoute(page, lang, index) {
        const component = loadDocs(lang, page.path);
        let child = {
            path: page.path.slice(1),
            name: 'component-' + lang + (page.title || page.name),
            component: component.default || component
        }
        route[index].children.push(child);
    }
    return route;
}

let route = registerRoute(navConfig)

const generateMiscRoutes = function(lang) {
    let indexRoute = {
        path: `/${ lang }`, // 首页
        name: 'home' + lang,
        component: load(lang, 'index')
    }
    return [indexRoute];
}
route = route.concat(generateMiscRoutes('zh-CN'));
console.log('gsdroute', route)
export default route;
