import { AIStore } from '../src/runtime/store'

describe('AIStore Setup Configuration', () => {
  beforeEach(() => {
    AIStore.setSetup({}) // Reset sebelum setiap test
  })

  test('Should set and get setup configuration correctly', () => {
    const mockSetup = {
      plugins: {
        name: 'tailwindcss',
        version: 'latest',
        mode: 'development',
      },
    }

    AIStore.setSetup(mockSetup) // Simpan konfigurasi
    const storedSetup = AIStore.getSetup() // Ambil kembali konfigurasi

    expect(storedSetup).toEqual(mockSetup) // Pastikan sama
  })

  test('Should return an empty object if no setup is set', () => {
    const storedSetup = AIStore.getSetup()
    expect(storedSetup).toEqual({}) // Harus kosong secara default
  })
})
