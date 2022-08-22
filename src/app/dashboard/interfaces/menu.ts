import { SafeHtml } from "@angular/platform-browser";

export interface MenuItems {
    icon: SafeHtml,
    label: string,
    mobile: boolean,
    isActive?: boolean,
    link?: string
} 