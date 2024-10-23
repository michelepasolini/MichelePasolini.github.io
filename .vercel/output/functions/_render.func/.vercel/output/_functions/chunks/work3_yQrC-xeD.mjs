/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Forecasted stock levels for both active and obsolete products in the luxury jewelry and watch sector, effectively managing planning processes such as open-to-assortment (OTA) and open-to-buy (OTB) to adapt to production constraints and demand fluctuations.</p>\n</li>\n<li>\n<p>Collaborated with merchandising teams to meet service level goals, supported new store openings through benchmarking analysis, and coordinated with central finance to establish stock targets and monitor inventory performance.</p>\n</li>\n<li>\n<p>Spearheaded an obsolescence campaign and led multifunctional initiatives to enhance stock performance, driving process improvements and supporting long-term capacity scaling for production.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"WW INVENTORY PLANNING AND ANALYST","date":"Jan 2018 - Jan 2022","url":"https://www.kelloggs.ie/en_IE/home.html","location":"Dublin, Ireland","org":"LVMH","tags":["Stock Forecasting","Inventory Management","Process Optimization"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\r\n- Forecasted stock levels for both active and obsolete products in the luxury jewelry and watch sector, effectively managing planning processes such as open-to-assortment (OTA) and open-to-buy (OTB) to adapt to production constraints and demand fluctuations.\r\n\r\n- Collaborated with merchandising teams to meet service level goals, supported new store openings through benchmarking analysis, and coordinated with central finance to establish stock targets and monitor inventory performance.\r\n\r\n- Spearheaded an obsolescence campaign and led multifunctional initiatives to enhance stock performance, driving process improvements and supporting long-term capacity scaling for production.";
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
