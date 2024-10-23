/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>\n<p>Conducted in-depth market research on the American Association congress market to identify growth opportunities and strategic expansion for a leading Italian company.</p>\n</li>\n<li>\n<p>Analyzed key trends and competitive landscape to support the development of targeted growth strategies for the European Association congress market.</p>\n</li>\n<li>\n<p>Provided actionable insights to align the company’s business objectives with new market potential, driving international growth.</p>\n</li>\n</ul>";

				const frontmatter = {"title":"INTERNSHIP","date":"Oct 2012 - Dec 2012","url":"https://www.kelloggs.ie/en_IE/home.html","location":"Mt. Laurel, New Jersey, U.S.","org":"ASSOCIATION HEADQUARTERS","tags":["Market Expansion","Strategic Growth","Competitive Analysis"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/works/work6.md";
				const url = "/works/work6";
				function rawContent() {
					return "\r\n- Conducted in-depth market research on the American Association congress market to identify growth opportunities and strategic expansion for a leading Italian company.\r\n\r\n- Analyzed key trends and competitive landscape to support the development of targeted growth strategies for the European Association congress market.\r\n\r\n- Provided actionable insights to align the company's business objectives with new market potential, driving international growth.";
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
