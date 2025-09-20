Day #51<br>

Got to know about pure vs unpure components. Pure ones only re-render if props or state change, unpure re-render every time. Also saw how we can group components using objects and even use the rest operator with them.<br>

State Hook: React updates state asynchronously, so changes don’t re-render right away but happen together once the component finishes. State stays outside the component unlike normal variables and it should always be at the top, not inside loops or conditions, else it causes issues.<br>

Strict Mode: During development it renders things twice just to catch issues, in production it will not since we do not use strict mode there.
