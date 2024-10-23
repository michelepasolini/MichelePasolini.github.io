/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Spearheaded customer service and relationship management with top-tier clients, driving optimal service levels, successful promotional buy-ins, and seamless range changes for major retailers.</p>\n</li>\n<li>\n<p>Led demand planning and forecasting, ensuring product availability, integrating new product lines, and maintaining forecast accuracy within ±5%, crucial for sales and marketing efforts.</p>\n</li>\n<li>\n<p>Managed logistics operations, including coordination with haulage companies and warehouse partners, ensuring timely deliveries and regulatory compliance with packaging tax regulations.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"CUSTOMER SUPPLY CHAIN MANAGER","date":"March 2024 - Oct 2024","url":"https://www.john-west.ie/","location":"Dublin, Ireland","org":"JOHN WEST (THAI UNION)","tags":["Demand Planning","Logistics Management","Client Relationship"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\r\n- Spearheaded customer service and relationship management with top-tier clients, driving optimal service levels, successful promotional buy-ins, and seamless range changes for major retailers.\r\n \r\n- Led demand planning and forecasting, ensuring product availability, integrating new product lines, and maintaining forecast accuracy within ±5%, crucial for sales and marketing efforts.\r\n \r\n- Managed logistics operations, including coordination with haulage companies and warehouse partners, ensuring timely deliveries and regulatory compliance with packaging tax regulations.\r\n\r\n";
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
