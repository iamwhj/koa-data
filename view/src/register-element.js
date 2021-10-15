import 'element-plus/lib/theme-chalk/base.css';
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElButton,
  ElInput,
  ElTable,
  ElTableColumn,
  ElDialog
} from 'element-plus'; // 需要的就导入

const components = [
  ElContainer,
  ElHeader,
  ElMain,
  ElButton,
  ElInput,
  ElTable,
  ElTableColumn,
  ElDialog
];

export default function (app) {
  for (const component of components) {
    app.component(component.name, component);
  }
}