import themeCss from '../theme.css?raw';

// Import component styles as raw strings
import buttonStyles from './components/Button/Button.module.css?raw';
import inputStyles from './components/Input/Input.module.css?raw';
import textAreaStyles from './components/TextArea/TextArea.module.css?raw';
import checkboxStyles from './components/Checkbox/Checkbox.module.css?raw';
import radioStyles from './components/Radio/Radio.module.css?raw';
import dropdownStyles from './components/Dropdown/Dropdown.module.css?raw';
import tableStyles from './components/Table/Table.module.css?raw';
import gridStyles from './components/Grid/Grid.module.css?raw';
import dialogStyles from './components/Dialog/Dialog.module.css?raw';
import spinnerStyles from './components/Spinner/Spinner.module.css?raw';
import tabsStyles from './components/Tabs/Tabs.module.css?raw';
import tooltipStyles from './components/Tooltip/Tooltip.module.css?raw';

// Inject styles into the DOM
if (typeof document !== 'undefined') {
  const injectStyles = (css: string) => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  };

  injectStyles(themeCss);
  injectStyles(buttonStyles);
  injectStyles(inputStyles);
  injectStyles(textAreaStyles);
  injectStyles(checkboxStyles);
  injectStyles(radioStyles);
  injectStyles(dropdownStyles);
  injectStyles(tableStyles);
  injectStyles(gridStyles);
  injectStyles(dialogStyles);
  injectStyles(spinnerStyles);
  injectStyles(tabsStyles);
  injectStyles(tooltipStyles);
}

// Theme
export * from "./components/ThemeProvider";

// Components
export * from "./components/Button";
export * from "./components/Input";
export * from "./components/TextArea";
export * from "./components/Checkbox";
export * from "./components/Radio";
export * from "./components/Dropdown";
export * from "./components/Table";
export * from "./components/Grid";
export * from "./components/Dialog";
export * from "./components/Spinner";
export * from "./components/Tabs";
export * from "./components/Tooltip";
