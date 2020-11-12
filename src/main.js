import { addStudyHandler, removeStudyHandler } from "./toggleCaseStudy.js";
import { toggleCaseStudyLinksHandler } from "./toggleCaseStudyLinks.js";
import "./toggleState.js";
import { tsParticles } from "tsparticles";
import { particlesConfig } from "./particlesConfig.js";
import ClipboardJS from "clipboard";

import "./scss/index.scss";

tsParticles.load("tsparticles", particlesConfig);

new ClipboardJS(".contact__info--copy");
