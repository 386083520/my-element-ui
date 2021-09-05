import navConfig from './nav.config';

const LOAD_MAP = {
    'zh-CN': name => {
        return r => require.ensure([], () =>
                r(require(`./pages/zh-CN/${name}.vue`)),
            'zh-CN');
    }
}

const load = function(lang, path) {
    return LOAD_MAP[lang](path);
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
    })
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
export default route;
