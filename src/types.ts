export interface AICSSComponent {
  name: string
  styles: Record<string, string>
  onClick?: (event: Event) => void
}
