const t=document.querySelector(".feedback-form"),a=t.elements.email,o=t.elements.message,s="feedback-form-state";function r(){const e=localStorage.getItem(s);return e?JSON.parse(e):{}}function l(){const e={email:a.value.trim(),message:o.value.trim()};localStorage.setItem(s,JSON.stringify(e))}const m=r();a.value=m.email||"";o.value=m.message||"";t.addEventListener("input",e=>{l()});t.addEventListener("submit",e=>{e.preventDefault(),console.log({email:a.value.trim(),message:o.value.trim()}),localStorage.removeItem(s),t.reset()});
//# sourceMappingURL=2-form-10e00673.js.map