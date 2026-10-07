(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/marketplace/CategoryFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryFilter",
    ()=>CategoryFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/marketplace/useUrlQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CategoryFilter({ value, categories, className }) {
    _s();
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(value);
    const [, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        id: "category-filter",
        label: "Category",
        className: className,
        value: selected,
        onChange: (event)=>{
            const next = event.target.value;
            startTransition(()=>{
                setSelected(next);
                update({
                    category: next || null
                });
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "All categories"
            }, void 0, false, {
                fileName: "[project]/components/marketplace/CategoryFilter.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: category.name,
                    children: [
                        category.name,
                        " (",
                        category.count,
                        ")"
                    ]
                }, category.name, true, {
                    fileName: "[project]/components/marketplace/CategoryFilter.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/marketplace/CategoryFilter.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(CategoryFilter, "CoZTLVhZSyq9navvABJdUAUW9qU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = CategoryFilter;
var _c;
__turbopack_context__.k.register(_c, "CategoryFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/marketplace/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/marketplace/useUrlQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEBOUNCE_MS = 300;
function SearchBar({ value, className }) {
    _s();
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"])();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>({
                "SearchBar.useEffect": ()=>clearTimeout(timer.current)
            })["SearchBar.useEffect"]
    }["SearchBar.useEffect"], []);
    // Keep the input in sync with the URL after back/forward or "Clear filters",
    // but never overwrite text while the user is typing.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchBar.useEffect": ()=>{
            const input = inputRef.current;
            if (input && document.activeElement !== input && input.value !== value) {
                input.value = value;
            }
        }
    }["SearchBar.useEffect"], [
        value
    ]);
    function commit(next, replace) {
        clearTimeout(timer.current);
        const trimmed = next.trim();
        if (trimmed === value) return;
        update({
            q: trimmed || null
        }, {
            replace
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        commit(inputRef.current?.value ?? "", false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        role: "search",
        action: "/products",
        onSubmit: handleSubmit,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "product-search",
                className: "mb-1.5 block text-xs font-medium text-ink-2",
                children: "Search products"
            }, void 0, false, {
                fileName: "[project]/components/marketplace/SearchBar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink-3",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/marketplace/SearchBar.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        id: "product-search",
                        name: "q",
                        type: "search",
                        defaultValue: value,
                        placeholder: "Search phones, laptops, furniture…",
                        autoComplete: "off",
                        enterKeyHint: "search",
                        onChange: (event)=>{
                            const next = event.target.value;
                            clearTimeout(timer.current);
                            timer.current = setTimeout(()=>commit(next, true), DEBOUNCE_MS);
                        },
                        className: "min-h-11 w-full rounded-lg border border-line-strong bg-surface py-2 pl-9 pr-3 text-sm text-ink transition-colors placeholder:text-ink-3 hover:border-ink-3"
                    }, void 0, false, {
                        fileName: "[project]/components/marketplace/SearchBar.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/marketplace/SearchBar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/marketplace/SearchBar.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(SearchBar, "QY2Skqm5ilXWQoiOXOTsyaEKAa8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"]
    ];
});
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/marketplace/SortSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SortSelect",
    ()=>SortSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/marketplace/useUrlQuery.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SortSelect({ value, className }) {
    _s();
    const { update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"])(value);
    const [, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
        id: "sort-select",
        label: "Sort by",
        className: className,
        value: selected,
        onChange: (event)=>{
            const next = event.target.value;
            startTransition(()=>{
                setSelected(next);
                update({
                    sort: next === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SORT"] ? null : next
                });
            });
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: option.value,
                children: option.label
            }, option.value, false, {
                fileName: "[project]/components/marketplace/SortSelect.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/marketplace/SortSelect.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(SortSelect, "CoZTLVhZSyq9navvABJdUAUW9qU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$marketplace$2f$useUrlQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUrlQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptimistic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = SortSelect;
var _c;
__turbopack_context__.k.register(_c, "SortSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/marketplace/useUrlQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUrlQuery",
    ()=>useUrlQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useUrlQuery() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    function update(patch, options = {}) {
        // Read the live URL so a delayed (debounced) update never overwrites newer params.
        const next = new URLSearchParams(window.location.search);
        for (const [key, value] of Object.entries(patch)){
            if (value) next.set(key, value);
            else next.delete(key);
        }
        const qs = next.toString();
        const href = qs ? `${pathname}?${qs}` : pathname;
        if (options.replace) router.replace(href, {
            scroll: false
        });
        else router.push(href, {
            scroll: false
        });
    }
    return {
        update
    };
}
_s(useUrlQuery, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
;
;
function Select({ label, id, className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-1.5 block text-xs font-medium text-ink-2",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/Select.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: id,
                        className: "min-h-11 w-full cursor-pointer appearance-none truncate rounded-lg border border-line-strong bg-surface py-2 pl-3 pr-9 text-sm text-ink transition-colors hover:border-ink-3",
                        ...props,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Select.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-ink-3",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Select.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Select.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Select.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SORT",
    ()=>DEFAULT_SORT,
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS,
    "applyProductQuery",
    ()=>applyProductQuery,
    "hasActiveFilters",
    ()=>hasActiveFilters,
    "parseProductQuery",
    ()=>parseProductQuery
]);
const SORT_OPTIONS = [
    {
        value: "newest",
        label: "Newest"
    },
    {
        value: "price-asc",
        label: "Price: low to high"
    },
    {
        value: "price-desc",
        label: "Price: high to low"
    }
];
const DEFAULT_SORT = "newest";
function firstValue(value) {
    return (Array.isArray(value) ? value[0] : value) ?? "";
}
function parseProductQuery(params) {
    const sort = SORT_OPTIONS.find((option)=>option.value === firstValue(params.sort))?.value;
    return {
        q: firstValue(params.q).trim().slice(0, 100),
        category: firstValue(params.category).trim(),
        sort: sort ?? DEFAULT_SORT
    };
}
function hasActiveFilters(query) {
    return query.q !== "" || query.category !== "" || query.sort !== DEFAULT_SORT;
}
function applyProductQuery(products, query = {}) {
    const terms = (query.q ?? "").toLowerCase().split(/\s+/).filter(Boolean);
    const category = (query.category ?? "").toLowerCase();
    const matches = products.filter((product)=>{
        if (category && product.category.toLowerCase() !== category) return false;
        const searchable = `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase();
        return terms.every((term)=>searchable.includes(term));
    });
    const sort = query.sort ?? DEFAULT_SORT;
    return matches.sort((a, b)=>{
        if (sort === "price-asc") return a.price - b.price;
        if (sort === "price-desc") return b.price - a.price;
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0y5in-f._.js.map