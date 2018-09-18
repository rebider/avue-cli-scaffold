import {
    setStore,
    getStore,
    removeStore
} from '@/util/store'
import {
    getDic
} from '@/api/admin'
import website from '@/const/website'
const common = {

    state: {
        isCollapse: false,
        isFullScren: false,
        screen: -1,
        showTag: getStore({ name: 'showTag' }),
        isLock: getStore({
            name: 'isLock'
        }) || false,
        showDebug: getStore({
            name: 'showDebug'
        }) || true,
        showCollapse: getStore({
            name: 'showCollapse'
        }) || true,
        showSearch: getStore({
            name: 'showSearch'
        }) || true,
        showLock: getStore({
            name: 'showLock'
        }) || true,
        showFullScren: getStore({
            name: 'showFullScren'
        }) || true,
        showTheme: getStore({
            name: 'showTheme'
        }) || true,
        showColor: getStore({
            name: 'showColor'
        }) || true,
        showMenu: getStore({
            name: 'showMenu'
        }) || true,
        theme: getStore({
            name: 'theme'
        }) || '#409EFF',
        themeName: getStore({
            name: 'themeName'
        }) || '',
        lockPasswd: getStore({
            name: 'lockPasswd'
        }) || '',
        website: website,
    },
    actions: {
        //获取字典公用类
        GetDic(params, dic) {
            return new Promise((resolve) => {
                if (dic instanceof Array) {
                    Promise.all(dic.map(ele => getDic(ele))).then(data => {
                        let result = {};
                        dic.forEach((ele, index) => {
                            result[ele] = data[index].data;
                        })
                        resolve(result)
                    })
                }
            })
        }
    },
    mutations: {
        SET_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse;
        },
        SET_FULLSCREN: (state) => {
            state.isFullScren = !state.isFullScren;
        },
        SET_SHOWCOLLAPSE: (state, active) => {
            state.showCollapse = active;
            setStore({
                name: 'showCollapse',
                content: state.showCollapse
            })
        },
        SET_SHOWTAG: (state, active) => {
            state.showTag = active;
            setStore({
                name: 'showTag',
                content: state.showTag
            })
        },
        SET_SHOWMENU: (state, active) => {
            state.showMenu = active;
            setStore({
                name: 'showMenu',
                content: state.showMenu
            })
        },
        SET_SHOWLOCK: (state, active) => {
            state.showLock = active;
            setStore({
                name: 'showLock',
                content: state.showLock
            })
        },
        SET_SHOWSEARCH: (state, active) => {
            state.showSearch = active;
            setStore({
                name: 'showSearch',
                content: state.showSearch
            })
        },
        SET_SHOWFULLSCREN: (state, active) => {
            state.showFullScren = active;
            setStore({
                name: 'showFullScren',
                content: state.showFullScren
            })
        },
        SET_SHOWDEBUG: (state, active) => {
            state.showDebug = active;
            setStore({
                name: 'showDebug',
                content: state.showDebug
            })
        },
        SET_SHOWTHEME: (state, active) => {
            state.showTheme = active;
            setStore({
                name: 'showTheme',
                content: state.showTheme
            })
        },
        SET_SHOWCOLOR: (state, active) => {
            state.showColor = active;
            setStore({
                name: 'showColor',
                content: state.showColor
            })
        },
        SET_LOCK: (state) => {
            state.isLock = true;
            setStore({
                name: 'isLock',
                content: state.isLock,
                type: 'session'
            })
        },
        SET_SCREEN: (state, screen) => {
            state.screen = screen;
        },
        SET_THEME: (state, color) => {
            state.theme = color;
            setStore({
                name: 'theme',
                content: state.theme,
            })
        },
        SET_THEME_NAME: (state, themeName) => {
            state.themeName = themeName;
            setStore({
                name: 'themeName',
                content: state.themeName,
            })
        },
        SET_LOCK_PASSWD: (state, lockPasswd) => {
            state.lockPasswd = lockPasswd;
            setStore({
                name: 'lockPasswd',
                content: state.lockPasswd,
                type: 'session'
            })
        },
        CLEAR_LOCK: (state) => {
            state.isLock = false;
            state.lockPasswd = '';
            removeStore({
                name: 'lockPasswd'
            });
            removeStore({
                name: 'isLock'
            });
        },
    }
}
export default common