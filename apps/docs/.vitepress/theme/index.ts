import DefaultTheme from 'vitepress/theme';
// 引入UI库的样式
import '@lub/ui/style.css';
import { useGlobalComp } from '../utils/useGlobalComp';
// 自定义样式重载
import './styles/global.css';
// 导入UnoCSS
import 'virtual:uno.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    useGlobalComp(app);
  },
};
