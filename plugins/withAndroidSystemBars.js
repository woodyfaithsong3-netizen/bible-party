const { withAndroidStyles } = require('expo/config-plugins');

module.exports = function withAndroidSystemBars(config) {
  return withAndroidStyles(config, (config) => {
    const styles = config.modResults.resources.style || [];
    const theme = styles.find((item) => item.$ && item.$.name === 'AppTheme');
    if (!theme) return config;

    theme.item = theme.item || [];
    const setItem = (name, value) => {
      const existing = theme.item.find((item) => item.$ && item.$.name === name);
      if (existing) existing._ = value;
      else theme.item.push({ $: { name }, _: value });
    };

    setItem('android:navigationBarColor', '#041C24');
    setItem('android:navigationBarDividerColor', '#041C24');
    setItem('android:windowLightNavigationBar', 'false');
    setItem('android:enforceNavigationBarContrast', 'false');
    return config;
  });
};
