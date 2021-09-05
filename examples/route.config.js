let route = []

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
