/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Consolidated local reports to provide topline insights and facilitate informed decision-making in financing for companies investing abroad.</p>\n</li>\n<li>\n<p>Actively participated in presale meetings and assessments with clients and partners, contributing to major projects and strategic initiatives.</p>\n</li>\n<li>\n<p>Developed a comprehensive business plan for a startup, analyzing customer potential and market value, and conducted a renovation project to establish benchmarks for company profitability.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"BUSINESS ANALYST","date":"Apr 2013 - Dec 2015","url":"https://www.pmifincons.it/","location":"Milan, Italy","org":"PMI FINANCE & CONSULTING SRL","tags":["Strategic Insights","Market Analysis","Financing Solutions"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work5.md";
				const url = "/works/work5";
				function rawContent() {
					return "\r\n- Consolidated local reports to provide topline insights and facilitate informed decision-making in financing for companies investing abroad. \r\n\r\n- Actively participated in presale meetings and assessments with clients and partners, contributing to major projects and strategic initiatives.\r\n\r\n- Developed a comprehensive business plan for a startup, analyzing customer potential and market value, and conducted a renovation project to establish benchmarks for company profitability.";
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
