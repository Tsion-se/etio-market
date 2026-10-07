(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/layout/CategoriesMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoriesMenu",
    ()=>CategoriesMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CategoriesMenu({ categories }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoriesMenu.useEffect": ()=>{
            if (!open) return;
            function onPointerDown(event) {
                if (!container.current?.contains(event.target)) setOpen(false);
            }
            function onKeyDown(event) {
                if (event.key === "Escape") {
                    setOpen(false);
                    button.current?.focus();
                }
            }
            document.addEventListener("pointerdown", onPointerDown);
            document.addEventListener("keydown", onKeyDown);
            return ({
                "CategoriesMenu.useEffect": ()=>{
                    document.removeEventListener("pointerdown", onPointerDown);
                    document.removeEventListener("keydown", onKeyDown);
                }
            })["CategoriesMenu.useEffect"];
        }
    }["CategoriesMenu.useEffect"], [
        open
    ]);
    const itemClass = "flex min-h-11 items-center justify-between gap-6 rounded-lg px-3 text-sm text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: container,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: button,
                type: "button",
                "aria-expanded": open,
                "aria-controls": "categories-menu",
                onClick: ()=>setOpen((value)=>!value),
                className: "inline-flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink aria-expanded:bg-surface-2 aria-expanded:text-ink",
                children: [
                    "Categories",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `size-4 transition-transform ${open ? "rotate-180" : ""}`,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/components/layout/CategoriesMenu.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/CategoriesMenu.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                id: "categories-menu",
                className: "absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-line bg-surface p-1.5 shadow-pop",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products",
                            onClick: ()=>setOpen(false),
                            className: itemClass,
                            children: "All categories"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/CategoriesMenu.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/CategoriesMenu.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsHref"])({
                                    category: category.name
                                }),
                                onClick: ()=>setOpen(false),
                                className: itemClass,
                                children: [
                                    category.name,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs tabular-nums text-ink-3",
                                        children: category.count
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/CategoriesMenu.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/CategoriesMenu.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, category.name, false, {
                            fileName: "[project]/components/layout/CategoriesMenu.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/CategoriesMenu.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/CategoriesMenu.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(CategoriesMenu, "6i+0oij7e3tFOymAVI/RwTjRPW0=");
_c = CategoriesMenu;
var _c;
__turbopack_context__.k.register(_c, "CategoriesMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telegram$2f$TelegramOpenAppLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/telegram/TelegramOpenAppLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/TelegramProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function MobileNav({ categories }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { isTelegram, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const close = ()=>setOpen(false);
    const linkClass = "flex min-h-11 items-center rounded-lg px-3 text-base text-ink transition-colors hover:bg-surface-2";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            if (!open) return;
            const onKeyDown = {
                "MobileNav.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") setOpen(false);
                }
            }["MobileNav.useEffect.onKeyDown"];
            // Tapping anywhere outside the button and menu closes it, so it can never stay open by accident.
            const onPointerDown = {
                "MobileNav.useEffect.onPointerDown": (event)=>{
                    if (!container.current?.contains(event.target)) setOpen(false);
                }
            }["MobileNav.useEffect.onPointerDown"];
            document.addEventListener("keydown", onKeyDown);
            document.addEventListener("pointerdown", onPointerDown);
            return ({
                "MobileNav.useEffect": ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                    document.removeEventListener("pointerdown", onPointerDown);
                }
            })["MobileNav.useEffect"];
        }
    }["MobileNav.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: container,
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen((value)=>!value),
                "aria-expanded": open,
                "aria-controls": "mobile-menu",
                "aria-label": open ? "Close menu" : "Open menu",
                className: "inline-flex size-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "size-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/layout/MobileNav.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    className: "size-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/layout/MobileNav.tsx",
                    lineNumber: 47,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                id: "mobile-menu",
                "aria-label": "Mobile",
                className: "absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-surface px-4 pb-3 pt-2 shadow-pop",
                children: [
                    isTelegram && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 pb-2 text-sm text-ink-2",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramGreeting"])(user)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mx-auto max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                onClick: close,
                                className: `${linkClass} font-medium`,
                                children: "All products"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1",
                        onClick: close,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$telegram$2f$TelegramOpenAppLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TelegramOpenAppLink"], {
                            variant: "menu"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 px-3 text-xs font-semibold uppercase tracking-wider text-ink-3",
                        children: "Categories"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mx-auto mt-1 grid max-w-6xl grid-cols-2 gap-x-2",
                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsHref"])({
                                        category: category.name
                                    }),
                                    onClick: close,
                                    className: `${linkClass.replace("text-base", "text-sm")} justify-between gap-2`,
                                    children: [
                                        category.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm tabular-nums text-ink-3",
                                            children: category.count
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MobileNav.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            }, category.name, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/MobileNav.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(MobileNav, "3LmAv8H/zlodVf8ZmYXc1hGQj8g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"]
    ];
});
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/NavLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NavLink({ href, children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        "aria-current": active ? "page" : undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors", active ? "text-ink" : "text-ink-2 hover:bg-surface-2 hover:text-ink"),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b-2 py-0.5", active ? "border-accent" : "border-transparent"),
            children: children
        }, void 0, false, {
            fileName: "[project]/components/layout/NavLink.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/layout/NavLink.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(NavLink, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavLink;
var _c;
__turbopack_context__.k.register(_c, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/telegram/TelegramBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramBadge",
    ()=>TelegramBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/TelegramProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TelegramBadge() {
    _s();
    const { isTelegram, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    if (!isTelegram) return null;
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramDisplayName"])(user);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex min-w-0 items-center gap-1.5 rounded-md border border-sky-200 bg-sky-50 px-2 py-1 text-xs font-medium text-sky-900 max-[399px]:px-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "size-3.5 shrink-0",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/telegram/TelegramBadge.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "max-[399px]:sr-only",
                children: "Telegram"
            }, void 0, false, {
                fileName: "[project]/components/telegram/TelegramBadge.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "max-sm:sr-only truncate",
                children: [
                    "· Hello, ",
                    name
                ]
            }, void 0, true, {
                fileName: "[project]/components/telegram/TelegramBadge.tsx",
                lineNumber: 18,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/telegram/TelegramBadge.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(TelegramBadge, "OaKv2xC/G9lzHxNj2HdyhvKZ+w0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"]
    ];
});
_c = TelegramBadge;
var _c;
__turbopack_context__.k.register(_c, "TelegramBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/telegram/TelegramOpenAppLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramOpenAppLink",
    ()=>TelegramOpenAppLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$deeplink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/deeplink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/TelegramProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PRODUCT_PATH = /^\/products\/([^/]+)\/?$/;
function TelegramOpenAppLink({ variant = "header" }) {
    _s();
    const { isTelegram } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    if (isTelegram) return null;
    const productId = PRODUCT_PATH.exec(pathname)?.[1];
    const href = productId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$deeplink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTelegramProductLink"])(decodeURIComponent(productId)) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$deeplink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTelegramMiniAppLink"])();
    if (!href) return null;
    const link = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: variant === "menu" ? "flex min-h-11 items-center gap-2 rounded-lg px-3 text-base font-medium text-ink transition-colors hover:bg-surface-2" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonClassName"])({
            variant: "secondary"
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "size-4",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/telegram/TelegramOpenAppLink.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            "Open in Telegram",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: " (opens in a new tab)"
            }, void 0, false, {
                fileName: "[project]/components/telegram/TelegramOpenAppLink.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/telegram/TelegramOpenAppLink.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
    // The header wrapper only exists when there is a link, so an unconfigured site is unchanged.
    return variant === "header" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ml-2 hidden md:block",
        children: link
    }, void 0, false, {
        fileName: "[project]/components/telegram/TelegramOpenAppLink.tsx",
        lineNumber: 43,
        columnNumber: 33
    }, this) : link;
}
_s(TelegramOpenAppLink, "zstT0JQFLYf2wDOfGpAjPfOFUds=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TelegramOpenAppLink;
var _c;
__turbopack_context__.k.register(_c, "TelegramOpenAppLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/telegram/TelegramStartParamHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramStartParamHandler",
    ()=>TelegramStartParamHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$deeplink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/deeplink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/TelegramProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TelegramStartParamHandler() {
    _s();
    const { isTelegram } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const ran = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramStartParamHandler.useEffect": ()=>{
            if (!isTelegram || ran.current) return;
            ran.current = true;
            const startParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramStartParam"])();
            // A reload re-delivers the same start param; don't yank the user back to it.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasHandledLaunch"])(startParam)) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markLaunchHandled"])(startParam);
            const destination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$deeplink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLaunchDestination"])(startParam, pathname);
            if (destination && destination !== pathname) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skipNextNavigationCount"])();
                router.replace(destination);
            }
        }
    }["TelegramStartParamHandler.useEffect"], [
        isTelegram,
        pathname,
        router
    ]);
    return null;
}
_s(TelegramStartParamHandler, "Mig3xHWqjOgn+Zpzupr1wqVEd9k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$TelegramProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTelegram"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TelegramStartParamHandler;
var _c;
__turbopack_context__.k.register(_c, "TelegramStartParamHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const root = ()=>document.documentElement;
/** The <html> class list is the source of truth; the inline script sets it before first paint. */ function subscribe(onChange) {
    const observer = new MutationObserver(onChange);
    observer.observe(root(), {
        attributes: true,
        attributeFilter: [
            "class"
        ]
    });
    return ()=>observer.disconnect();
}
function applyTheme(dark, animate) {
    const el = root();
    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.classList.add("theme-transition");
        window.setTimeout(()=>el.classList.remove("theme-transition"), 260);
    }
    el.classList.toggle("dark", dark);
}
function ThemeToggle({ className }) {
    _s();
    // Server and first client render both report "light"; the real value arrives right after
    // hydration, so markup never mismatches. Both icons are always rendered and switched by CSS.
    const isDark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "ThemeToggle.useSyncExternalStore[isDark]": ()=>root().classList.contains("dark")
    }["ThemeToggle.useSyncExternalStore[isDark]"], {
        "ThemeToggle.useSyncExternalStore[isDark]": ()=>false
    }["ThemeToggle.useSyncExternalStore[isDark]"]);
    // While the user has no saved choice, keep following the operating system.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const media = window.matchMedia("(prefers-color-scheme: dark)");
            const onChange = {
                "ThemeToggle.useEffect.onChange": (event)=>{
                    try {
                        if (localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_STORAGE_KEY"])) return;
                    } catch  {
                    // Storage unavailable: fall through and follow the system.
                    }
                    applyTheme(event.matches, true);
                }
            }["ThemeToggle.useEffect.onChange"];
            media.addEventListener("change", onChange);
            return ({
                "ThemeToggle.useEffect": ()=>media.removeEventListener("change", onChange)
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], []);
    function toggle() {
        const next = !isDark;
        applyTheme(next, true);
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_STORAGE_KEY"], next ? "dark" : "light");
        } catch  {
        // Private mode etc.: the theme still changes for this visit.
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        "aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
        title: isDark ? "Switch to light theme" : "Switch to dark theme",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex size-11 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-surface-2 hover:text-ink", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "size-5 scale-100 transition-transform dark:hidden",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/theme/ThemeToggle.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "hidden size-5 dark:block",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/theme/ThemeToggle.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/theme/ThemeToggle.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "Rt7NijfeVMdr3FoO0If3DVbzCTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "ButtonLink",
    ()=>ButtonLink,
    "buttonClassName",
    ()=>buttonClassName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const base = "inline-flex items-center justify-center gap-2 rounded-lg font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-150 disabled:pointer-events-none disabled:opacity-50 motion-safe:active:scale-[0.98]";
const variants = {
    primary: "bg-accent text-on-accent shadow-[0_1px_2px_rgb(0_0_0/0.18),inset_0_1px_0_rgb(255_255_255/0.14)] hover:bg-accent-hover active:bg-accent-active",
    secondary: "border border-line-strong bg-surface text-ink shadow-card hover:border-ink-3 hover:bg-surface-2",
    ghost: "text-ink-2 hover:bg-surface-2 hover:text-ink"
};
// Both sizes keep a minimum 44px touch target.
const sizes = {
    md: "min-h-11 px-4 text-sm",
    lg: "min-h-12 px-6 text-base"
};
function buttonClassName({ variant = "primary", size = "md" }, className) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(base, variants[variant], sizes[size], className);
}
function Button({ variant, size, className, type = "button", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: buttonClassName({
            variant,
            size
        }, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_c = Button;
function ButtonLink({ variant, size, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: buttonClassName({
            variant,
            size
        }, className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_c1 = ButtonLink;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "ButtonLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWebsiteProductUrl",
    ()=>createWebsiteProductUrl,
    "getPublicAppUrl",
    ()=>getPublicAppUrl,
    "siteConfig",
    ()=>siteConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product-id.ts [app-client] (ecmascript)");
;
const siteConfig = {
    name: "EthioMarket",
    description: "EthioMarket is a modern marketplace to discover products from trusted sellers."
};
function getPublicAppUrl() {
    const raw = ("TURBOPACK compile-time value", "http://localhost:3000")?.trim();
    if (!raw) return null;
    try {
        const url = new URL(raw);
        if (url.protocol !== "https:" && url.protocol !== "http:") return null;
        return `${url.origin}${url.pathname.replace(/\/+$/, "")}`;
    } catch  {
        return null;
    }
}
function createWebsiteProductUrl(productId) {
    const base = getPublicAppUrl();
    if (!base || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProductId"])(productId)) return null;
    return `${base}/products/${productId}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/product-id.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Product ids travel through Telegram's `startapp` parameter, which only allows
 * A-Z a-z 0-9 _ - (max 512 chars). Ids are also public data and never a credential.
 */ __turbopack_context__.s([
    "PRODUCT_ID_PATTERN",
    ()=>PRODUCT_ID_PATTERN,
    "isValidProductId",
    ()=>isValidProductId
]);
const PRODUCT_ID_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;
function isValidProductId(value) {
    return typeof value === "string" && PRODUCT_ID_PATTERN.test(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram/TelegramProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TelegramProvider",
    ()=>TelegramProvider,
    "useTelegram",
    ()=>useTelegram
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// The server and the first client render both use this value, so hydration always matches.
const outsideTelegram = {
    isTelegram: false,
    user: null,
    theme: null
};
const TelegramContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(outsideTelegram);
function TelegramProvider({ children }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(outsideTelegram);
    // Lets the BackButton know whether there is an in-app page to go back to.
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const lastPathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramProvider.useEffect": ()=>{
            if (lastPathname.current !== null && lastPathname.current !== pathname) (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noteInAppNavigation"])();
            lastPathname.current = pathname;
        }
    }["TelegramProvider.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TelegramProvider.useEffect": ()=>{
            let cancelled = false;
            let stopThemeListener;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadTelegramSdk"])().then({
                "TelegramProvider.useEffect": (webApp)=>{
                    if (cancelled || !webApp || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTelegramWebApp"])(webApp)) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeTelegram"])(webApp);
                    document.documentElement.dataset.telegram = "true";
                    setValue({
                        isTelegram: true,
                        user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramUser"])(webApp),
                        theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramTheme"])(webApp)
                    });
                    stopThemeListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onTelegramThemeChanged"])(webApp, {
                        "TelegramProvider.useEffect": ()=>setValue({
                                "TelegramProvider.useEffect": (current)=>({
                                        ...current,
                                        theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramTheme"])(webApp)
                                    })
                            }["TelegramProvider.useEffect"])
                    }["TelegramProvider.useEffect"]);
                }
            }["TelegramProvider.useEffect"]);
            return ({
                "TelegramProvider.useEffect": ()=>{
                    cancelled = true;
                    stopThemeListener?.();
                }
            })["TelegramProvider.useEffect"];
        }
    }["TelegramProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TelegramContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/telegram/TelegramProvider.tsx",
        lineNumber: 61,
        columnNumber: 10
    }, this);
}
_s(TelegramProvider, "sAV0KbjNceeynTX0AcV3VdNJP2k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TelegramProvider;
function useTelegram() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TelegramContext);
}
_s1(useTelegram, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "TelegramProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The only module that touches `window.Telegram`. Every function is safe to import
 * on the server: nothing runs at import time and each function guards `window`.
 */ __turbopack_context__.s([
    "canOpenTelegramLink",
    ()=>canOpenTelegramLink,
    "getTelegramStartParam",
    ()=>getTelegramStartParam,
    "getTelegramTheme",
    ()=>getTelegramTheme,
    "getTelegramUser",
    ()=>getTelegramUser,
    "getWebApp",
    ()=>getWebApp,
    "hasHandledLaunch",
    ()=>hasHandledLaunch,
    "hasInAppHistory",
    ()=>hasInAppHistory,
    "initializeTelegram",
    ()=>initializeTelegram,
    "isTelegramWebApp",
    ()=>isTelegramWebApp,
    "loadTelegramSdk",
    ()=>loadTelegramSdk,
    "markLaunchHandled",
    ()=>markLaunchHandled,
    "noteInAppNavigation",
    ()=>noteInAppNavigation,
    "onTelegramThemeChanged",
    ()=>onTelegramThemeChanged,
    "openExternalLink",
    ()=>openExternalLink,
    "openTelegramLink",
    ()=>openTelegramLink,
    "showTelegramBackButton",
    ()=>showTelegramBackButton,
    "skipNextNavigationCount",
    ()=>skipNextNavigationCount
]);
const SDK_URL = "https://telegram.org/js/telegram-web-app.js";
function getWebApp() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.Telegram?.WebApp ?? null;
}
function isTelegramWebApp(webApp = getWebApp()) {
    return webApp !== null && (webApp.initData !== "" || webApp.platform !== "unknown");
}
/**
 * Cheap pre-check so ordinary visitors never download the Telegram script.
 * Telegram launches with `#tgWebApp...` in the URL, injects `TelegramWebviewProxy`
 * on mobile, and the SDK remembers its launch params in sessionStorage so a reload
 * (which drops the hash) is still recognised.
 */ function mayBeInsideTelegram() {
    try {
        if (window.location.hash.includes("tgWebApp")) return true;
        if (window.sessionStorage.getItem("__telegram__initParams")) return true;
    } catch  {
    // Storage can be blocked; fall through to the other signals.
    }
    return "TelegramWebviewProxy" in window || /Telegram/i.test(window.navigator.userAgent);
}
let sdkPromise = null;
function loadTelegramSdk() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const existing = getWebApp();
    if (existing) return Promise.resolve(existing);
    if (!mayBeInsideTelegram()) return Promise.resolve(null);
    sdkPromise ??= new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = SDK_URL;
        script.async = true;
        script.onload = ()=>resolve(getWebApp());
        script.onerror = ()=>resolve(null);
        document.head.appendChild(script);
    });
    return sdkPromise;
}
function initializeTelegram(webApp) {
    try {
        webApp.ready();
        if (!webApp.isExpanded) webApp.expand();
        // Hex colours need Bot API 6.9. Our UI is light-only, so keep Telegram's chrome consistent with it.
        if (webApp.isVersionAtLeast("6.9")) {
            webApp.setHeaderColor("#ffffff");
            webApp.setBackgroundColor("#fafaf9");
        }
    } catch  {
    // Telegram customisation is optional; never let it break the marketplace.
    }
}
function getTelegramUser(webApp) {
    const raw = webApp.initDataUnsafe?.user;
    if (!raw || typeof raw.id !== "number") return null;
    return {
        id: raw.id,
        firstName: raw.first_name,
        lastName: raw.last_name,
        username: raw.username,
        languageCode: raw.language_code,
        isPremium: raw.is_premium
    };
}
function getTelegramTheme(webApp) {
    return {
        colorScheme: webApp.colorScheme === "dark" ? "dark" : "light",
        params: {
            ...webApp.themeParams
        }
    };
}
function onTelegramThemeChanged(webApp, handler) {
    webApp.onEvent("themeChanged", handler);
    return ()=>webApp.offEvent("themeChanged", handler);
}
function showTelegramBackButton(onClick) {
    const webApp = getWebApp();
    if (!webApp || !isTelegramWebApp(webApp)) return ()=>{};
    webApp.BackButton.onClick(onClick);
    webApp.BackButton.show();
    return ()=>{
        webApp.BackButton.offClick(onClick);
        webApp.BackButton.hide();
    };
}
/**
 * `history.length` is unreliable (a fresh tab already has 2 entries), so we count the
 * in-app navigations ourselves. Zero means the user landed here directly, e.g. via a link.
 */ let inAppNavigations = 0;
let skipNextNavigation = false;
function noteInAppNavigation() {
    if (skipNextNavigation) {
        skipNextNavigation = false;
        return;
    }
    inAppNavigations += 1;
}
function skipNextNavigationCount() {
    skipNextNavigation = true;
}
function hasInAppHistory() {
    return inAppNavigations > 0;
}
function getTelegramStartParam(webApp = getWebApp()) {
    const fromSdk = webApp?.initDataUnsafe?.start_param;
    if (fromSdk) return fromSdk;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return new URLSearchParams(window.location.hash.replace(/^#/, "")).get("tgWebAppStartParam") || null;
}
const LAUNCH_KEY = "marketly:tg-launch";
function hasHandledLaunch(startParam) {
    try {
        return window.sessionStorage.getItem(LAUNCH_KEY) === (startParam ?? "");
    } catch  {
        return false;
    }
}
function markLaunchHandled(startParam) {
    try {
        window.sessionStorage.setItem(LAUNCH_KEY, startParam ?? "");
    } catch  {
    // Without storage we may redirect again on reload; that is harmless.
    }
}
function openExternalLink(url) {
    const webApp = getWebApp();
    if (!webApp || !isTelegramWebApp(webApp) || typeof webApp.openLink !== "function") return false;
    webApp.openLink(url);
    return true;
}
function canOpenTelegramLink() {
    const webApp = getWebApp();
    return !!webApp && isTelegramWebApp(webApp) && typeof webApp.openTelegramLink === "function";
}
function openTelegramLink(url) {
    if (!canOpenTelegramLink()) return false;
    getWebApp().openTelegramLink(url);
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTelegramConfig",
    ()=>getTelegramConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Public Telegram configuration. Only non-secret values belong here: anything
 * prefixed NEXT_PUBLIC_ is bundled into the browser. Never add a bot token.
 */ const BOT_USERNAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{4,31}$/; // Telegram usernames: 5-32 chars
const MINI_APP_SHORT_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{2,31}$/; // BotFather short names: 3-32 chars
function getTelegramConfig() {
    const botUsername = ("TURBOPACK compile-time value", "ethio1_market_bot")?.trim().replace(/^@/, "");
    if (!botUsername || !BOT_USERNAME_PATTERN.test(botUsername)) return null;
    const shortName = ("TURBOPACK compile-time value", "")?.trim();
    return {
        botUsername,
        miniAppShortName: shortName && MINI_APP_SHORT_NAME_PATTERN.test(shortName) ? shortName : undefined
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram/deeplink.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProductShareLink",
    ()=>createProductShareLink,
    "createSellerChatLink",
    ()=>createSellerChatLink,
    "createTelegramMiniAppLink",
    ()=>createTelegramMiniAppLink,
    "createTelegramProductLink",
    ()=>createTelegramProductLink,
    "createTelegramShareLink",
    ()=>createTelegramShareLink,
    "extractProductId",
    ()=>extractProductId,
    "resolveLaunchDestination",
    ()=>resolveLaunchDestination
]);
/**
 * Single source of truth for Website <-> Telegram product links. Pure functions,
 * safe on the server and in the browser.
 *
 * Telegram Mini App links (https://core.telegram.org/api/links#mini-app-links):
 *   main Mini App:    https://t.me/<bot>?startapp=<param>
 *   direct-link app:  https://t.me/<bot>/<short_name>?startapp=<param>
 * The Mini App receives <param> as `start_param`. We use the product id as-is.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product-id.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/telegram/config.ts [app-client] (ecmascript)");
;
;
;
function createTelegramProductLink(productId) {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramConfig"])();
    if (!config || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProductId"])(productId)) return null;
    const path = config.miniAppShortName ? `${config.botUsername}/${config.miniAppShortName}` : config.botUsername;
    return `https://t.me/${path}?startapp=${productId}`;
}
function createTelegramMiniAppLink() {
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$telegram$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTelegramConfig"])();
    if (!config) return null;
    return config.miniAppShortName ? `https://t.me/${config.botUsername}/${config.miniAppShortName}` : `https://t.me/${config.botUsername}?startapp`;
}
function createTelegramShareLink(url, text) {
    const params = new URLSearchParams({
        url
    });
    if (text) params.set("text", text);
    return `https://t.me/share/url?${params.toString().replace(/\+/g, "%20")}`;
}
function createProductShareLink(productId, text) {
    const target = createTelegramProductLink(productId) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWebsiteProductUrl"])(productId);
    return target ? createTelegramShareLink(target, text) : null;
}
/* ---------- Seller direct chat (new) ---------- */ // Telegram usernames: 5-32 characters, start with a letter, then letters, digits or underscores.
const TELEGRAM_USERNAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{4,31}$/;
function createSellerChatLink(username, message) {
    const clean = username?.trim().replace(/^@/, "");
    if (!clean || !TELEGRAM_USERNAME_PATTERN.test(clean)) return null;
    const base = `https://t.me/${clean}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
function extractProductId(startParam) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2d$id$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProductId"])(startParam) ? startParam : null;
}
function resolveLaunchDestination(startParam, pathname) {
    const productId = extractProductId(startParam);
    if (productId) return `/products/${productId}`;
    return pathname === "/" ? "/products" : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/telegram/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTelegramDisplayName",
    ()=>getTelegramDisplayName,
    "getTelegramGreeting",
    ()=>getTelegramGreeting
]);
function getTelegramDisplayName(user) {
    if (!user) return null;
    return user.firstName || (user.username ? `@${user.username}` : null);
}
function getTelegramGreeting(user) {
    const name = getTelegramDisplayName(user);
    return name ? `Hello, ${name}` : "Telegram user";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** localStorage key holding the user's explicit choice ("light" | "dark"). Absent = follow the system. */ __turbopack_context__.s([
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "themeInitScript",
    ()=>themeInitScript
]);
const THEME_STORAGE_KEY = "marketly-theme";
const themeInitScript = `(function(){try{var s=localStorage.getItem('${THEME_STORAGE_KEY}');var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Joins truthy class names into a single string. */ __turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatFullDate",
    ()=>formatFullDate,
    "formatPrice",
    ()=>formatPrice,
    "productCountLabel",
    ()=>productCountLabel,
    "productsHref",
    ()=>productsHref,
    "truncate",
    ()=>truncate
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
function formatPrice(amount, currency) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 0
    }).format(amount);
}
function formatDate(isoDate) {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    }).format(new Date(isoDate));
}
function productCountLabel(count, filtered) {
    if (count === 0) return "No products found";
    const noun = count === 1 ? "product" : "products";
    return filtered ? `${count} ${noun} found` : `${count} ${noun}`;
}
function productsHref(params = {}) {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params))if (value) search.set(key, value);
    const qs = search.toString();
    return qs ? `/products?${qs}` : "/products";
}
function formatFullDate(isoDate) {
    return new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    }).format(new Date(isoDate));
}
function truncate(text, max) {
    if (text.length <= max) return text;
    return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_18dxdc8._.js.map