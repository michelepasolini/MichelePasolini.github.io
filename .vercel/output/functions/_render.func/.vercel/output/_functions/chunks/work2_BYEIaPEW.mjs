/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Led sales volume forecasting for short, medium, and long-term periods, ensuring financial alignment and fostering collaboration between sales and finance teams.</p>\n</li>\n<li>\n<p>Improved data visibility and communication across supply chain teams and external partners through advanced reporting solutions, driving risk identification and performance improvements.</p>\n</li>\n<li>\n<p>Developed dashboards to monitor long-term production forecasts, track lost sales due to supply issues, and streamlined processes for greater efficiency and automation.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"DEMAND PLANNER","date":"Feb 2022 - March 2024","url":"https://www.kelloggs.ie/en_IE/home.html","location":"Dublin, Ireland","org":"KELLOGG GROUP","tags":["Demand Forecasting","Data Visibility","Process Automation"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\r\n- Led sales volume forecasting for short, medium, and long-term periods, ensuring financial alignment and fostering collaboration between sales and finance teams.\r\n\r\n- Improved data visibility and communication across supply chain teams and external partners through advanced reporting solutions, driving risk identification and performance improvements.\r\n\r\n- Developed dashboards to monitor long-term production forecasts, track lost sales due to supply issues, and streamlined processes for greater efficiency and automation.";
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
