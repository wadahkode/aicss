export const AIStore = {
  // Menyimpan aturan CSS dengan key berupa selector, dan value adalah object aturan
  styles: {} as Record<string, Record<string, string>>,

  /**
   * Menyimpan aturan CSS untuk selector tertentu.
   * @param selector - Selector CSS, misalnya ".button"
   * @param rules - Objek aturan CSS, misalnya { background: "black", color: "white" }
   */
  set(selector: string, rules: Record<string, string>): void {
    this.styles[selector] = rules
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
}
