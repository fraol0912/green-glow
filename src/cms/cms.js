import CMS from "netlify-cms-app";

// Previews
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import BlogsPagePreview from "./preview-templates/BlogsPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("blogs", BlogsPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
