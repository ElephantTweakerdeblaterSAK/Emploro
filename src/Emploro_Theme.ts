// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
export const Emploro_Theme: CustomThemeConfig = {
	name: 'Emploro_Theme',
	properties: {
				// =~= Theme Properties =~=
				"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
				"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
				"--theme-font-color-base": "0 0 0",
				"--theme-font-color-dark": "255 255 255",
				"--theme-rounded-base": "9999px",
				"--theme-rounded-container": "8px",
				"--theme-border-base": "1px",
				// =~= Theme On-X Colors =~=
				"--on-primary": "0 0 0",
				"--on-secondary": "0 0 0",
				"--on-tertiary": "0 0 0",
				"--on-success": "255 255 255",
				"--on-warning": "0 0 0",
				"--on-error": "255 255 255",
				"--on-surface": "255 255 255",
				// =~= Theme Colors  =~=
				// primary | #ffffff 
				"--color-primary-50": "255 255 255", // #ffffff
				"--color-primary-100": "255 255 255", // #ffffff
				"--color-primary-200": "255 255 255", // #ffffff
				"--color-primary-300": "255 255 255", // #ffffff
				"--color-primary-400": "255 255 255", // #ffffff
				"--color-primary-500": "255 255 255", // #ffffff
				"--color-primary-600": "230 230 230", // #e6e6e6
				"--color-primary-700": "191 191 191", // #bfbfbf
				"--color-primary-800": "153 153 153", // #999999
				"--color-primary-900": "125 125 125", // #7d7d7d
				// secondary | #51ec70 
				"--color-secondary-50": "229 252 234", // #e5fcea
				"--color-secondary-100": "220 251 226", // #dcfbe2
				"--color-secondary-200": "212 250 219", // #d4fadb
				"--color-secondary-300": "185 247 198", // #b9f7c6
				"--color-secondary-400": "133 242 155", // #85f29b
				"--color-secondary-500": "81 236 112", // #51ec70
				"--color-secondary-600": "73 212 101", // #49d465
				"--color-secondary-700": "61 177 84", // #3db154
				"--color-secondary-800": "49 142 67", // #318e43
				"--color-secondary-900": "40 116 55", // #287437
				// tertiary | #c800ff 
				"--color-tertiary-50": "247 217 255", // #f7d9ff
				"--color-tertiary-100": "244 204 255", // #f4ccff
				"--color-tertiary-200": "241 191 255", // #f1bfff
				"--color-tertiary-300": "233 153 255", // #e999ff
				"--color-tertiary-400": "217 77 255", // #d94dff
				"--color-tertiary-500": "200 0 255", // #c800ff
				"--color-tertiary-600": "180 0 230", // #b400e6
				"--color-tertiary-700": "150 0 191", // #9600bf
				"--color-tertiary-800": "120 0 153", // #780099
				"--color-tertiary-900": "98 0 125", // #62007d
				// success | #6f59b1 
				"--color-success-50": "233 230 243", // #e9e6f3
				"--color-success-100": "226 222 239", // #e2deef
				"--color-success-200": "219 214 236", // #dbd6ec
				"--color-success-300": "197 189 224", // #c5bde0
				"--color-success-400": "154 139 200", // #9a8bc8
				"--color-success-500": "111 89 177", // #6f59b1
				"--color-success-600": "100 80 159", // #64509f
				"--color-success-700": "83 67 133", // #534385
				"--color-success-800": "67 53 106", // #43356a
				"--color-success-900": "54 44 87", // #362c57
				// warning | #6e8f2e 
				"--color-warning-50": "233 238 224", // #e9eee0
				"--color-warning-100": "226 233 213", // #e2e9d5
				"--color-warning-200": "219 227 203", // #dbe3cb
				"--color-warning-300": "197 210 171", // #c5d2ab
				"--color-warning-400": "154 177 109", // #9ab16d
				"--color-warning-500": "110 143 46", // #6e8f2e
				"--color-warning-600": "99 129 41", // #638129
				"--color-warning-700": "83 107 35", // #536b23
				"--color-warning-800": "66 86 28", // #42561c
				"--color-warning-900": "54 70 23", // #364617
				// error | #ff3d3d 
				"--color-error-50": "255 226 226", // #ffe2e2
				"--color-error-100": "255 216 216", // #ffd8d8
				"--color-error-200": "255 207 207", // #ffcfcf
				"--color-error-300": "255 177 177", // #ffb1b1
				"--color-error-400": "255 119 119", // #ff7777
				"--color-error-500": "255 61 61", // #ff3d3d
				"--color-error-600": "230 55 55", // #e63737
				"--color-error-700": "191 46 46", // #bf2e2e
				"--color-error-800": "153 37 37", // #992525
				"--color-error-900": "125 30 30", // #7d1e1e
				// surface | #020202 
				"--color-surface-50": "217 217 217", // #d9d9d9
				"--color-surface-100": "204 204 204", // #cccccc
				"--color-surface-200": "192 192 192", // #c0c0c0
				"--color-surface-300": "154 154 154", // #9a9a9a
				"--color-surface-400": "78 78 78", // #4e4e4e
				"--color-surface-500": "2 2 2", // #020202
				"--color-surface-600": "2 2 2", // #020202
				"--color-surface-700": "2 2 2", // #020202
				"--color-surface-800": "1 1 1", // #010101
				"--color-surface-900": "1 1 1", // #010101
				
			}
		}
		