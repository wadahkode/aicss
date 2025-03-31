# AICSS

AICSS adalah compiler CSS yang memungkinkan penggunaan Tailwind atau Bootstrap langsung dalam CSS tanpa harus menulis class panjang.

## Instalasi
```bash
npm install aicss
```

## Penggunaan
Tambahkan `@tw(...)` di dalam file CSS:
```css
.button {
   @tw(bg-blue-500, text-white, p-4);
}
```

Di dalam proyek Next.js, Vite, atau Webpack, tambahkan plugin:
```js
import AICSSWebpackPlugin from "./src/plugins/webpack-plugin-aicss";

export default {
  plugins: [new AICSSWebpackPlugin()]
};
```

Untuk runtime tanpa build tool, cukup tambahkan:
```html
<script src="src/runtime/aicss.min.js"></script>
```
