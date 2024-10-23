/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DihiT6b2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>In the world of Supply Chain, I run like a flash,<br>\nTen years of experience, but I never dash!<br>\nEvery day stronger, with CrossFit in my soul,<br>\nAt work, I train hard, sweating’s my goal.\r\n<br>\n<br>\nI collaborate with all, a teamwork pro,<br>\nIn the group, I dive in, no one goes slow.<br>\nQuick solutions? Look, I’m already there!<br>\nIf there’s a problem, call me, I swear!<br>\nI learn every day, never stand still,<br>\nSolving problems? Easy, I will!<br>\nAlways ready to help those in need,<br>\nBecause the world needs a hero, and that’s me indeed!</p>";

				const frontmatter = {"title":"about","name":"Michele Pasolini","designation":"Supply Chain Expert","location":"Dublin, Ireland"};
				const file = "C:/Users/miche/Downloads/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nIn the world of Supply Chain, I run like a flash,\\\r\nTen years of experience, but I never dash!\\\r\nEvery day stronger, with CrossFit in my soul,\\\r\nAt work, I train hard, sweating’s my goal.\r\n\\\r\n\\\r\nI collaborate with all, a teamwork pro,\\\r\nIn the group, I dive in, no one goes slow.\\\r\nQuick solutions? Look, I'm already there!\\\r\nIf there's a problem, call me, I swear!\\\r\nI learn every day, never stand still,\\\r\nSolving problems? Easy, I will!\\\r\nAlways ready to help those in need,\\\r\nBecause the world needs a hero, and that's me indeed!\r\n";
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

export { _page as _, compiledContent as c, frontmatter as f };
