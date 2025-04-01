export const AIStore = {
  // Menyimpan aturan CSS dengan key berupa selector, dan value adalah object aturan
  styles: {} as Record<string, Record<string, string>>,

  // Menyimpan pengaturan
  setupConfig: {} as Record<string, any>,

  /**
   * Menyimpan aturan CSS untuk selector tertentu.
   * @param selector - Selector CSS, misalnya ".button"
   * @param rules - Objek aturan CSS, misalnya { background: "black", color: "white" }
   */
  set(selector: string, rules: Record<string, string>): void {
    this.styles[selector] = rules
  },

  /**
   * Mengatur konfigurasi dari pengguna.
   *
   * ai.setup = {}
   */
  setSetup(config: Record<string, any>) {
    this.setupConfig = config
  },

  /**
   * Mengambil aturan CSS untuk selector tertentu.
   * @param selector - Selector yang dicari.
   * @returns Object aturan CSS, atau undefined jika tidak ada.
   */
  get(selector: string): Record<string, string> | undefined {
    return this.styles[selector]
  },

  /**
   * Mengambil semua aturan CSS yang tersimpan.
   * @returns Seluruh aturan CSS dalam bentuk objek.
   */
  getAll(): Record<string, Record<string, string>> {
    return this.styles
  },

  /**
   * Mengambil semua aturan dari
   * ai.setup
   */
  getSetup(): Record<string, any> {
    return this.setupConfig
  },
}
