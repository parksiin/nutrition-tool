import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nutrition-tool/', // 깃허브 레포지토리 이름과 동일하게 설정
})
