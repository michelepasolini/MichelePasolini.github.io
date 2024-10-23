/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Bachelor of ECONOMICS AND MANAGEMENT COMPANY","location":"Milan","url":"https://www.unicatt.it/","institute":"Università Cattolica del Sacro Cuore di Milano","date":"2006-2010","tags":["Supply Chain","#Corporate Economics","Future Business Leader","BizEconomics Expert"]};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/studies/studie2.md";
				const url = "/studies/studie2";
				function rawContent() {
					return "";
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
