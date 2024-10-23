/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Conducted inventory analysis for budget forecasting in the luxury industry, optimizing supply efficiency by closely monitoring material rotation rates.</p>\n</li>\n<li>\n<p>Coordinated product shipments with customs and freight agents, while overseeing production sites in collaboration with the sales department to ensure seamless operations.</p>\n</li>\n<li>\n<p>Managed the procurement of raw materials and semi-finished products by researching and evaluating new suppliers, synchronizing delivery schedules with production line planning.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"SUPPLY PLANNING AND PURCHASING","date":"Jan 2017 - Dec 2017","url":"https://misanimilano.com/en/","location":"Milan, Italy","org":"MISANI SPA","tags":["Inventory Optimization","Supplier Management","Logistics Coordination"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work4.md";
				const url = "/works/work4";
				function rawContent() {
					return "\r\n- Conducted inventory analysis for budget forecasting in the luxury industry, optimizing supply efficiency by closely monitoring material rotation rates.\r\n\r\n- Coordinated product shipments with customs and freight agents, while overseeing production sites in collaboration with the sales department to ensure seamless operations.\r\n\r\n- Managed the procurement of raw materials and semi-finished products by researching and evaluating new suppliers, synchronizing delivery schedules with production line planning.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
