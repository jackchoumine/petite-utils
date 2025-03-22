import{_ as e,c as a,ag as d,o as i}from"./chunks/framework.BcBuEkoe.js";const f=JSON.parse('{"title":"函数: identityCodeValid()","description":"","frontmatter":{},"headers":[],"relativePath":"src/functions/identityCodeValid.md","filePath":"src/functions/identityCodeValid.md","lastUpdated":null}'),o={name:"src/functions/identityCodeValid.md"};function r(l,t,n,c,s,h){return i(),a("div",null,t[0]||(t[0]=[d('<p><a href="./../README.html"><strong>petite-utils</strong></a> • <strong>Docs</strong></p><hr><h1 id="函数-identitycodevalid" tabindex="-1">函数: identityCodeValid() <a class="header-anchor" href="#函数-identitycodevalid" aria-label="Permalink to &quot;函数: identityCodeValid()&quot;">​</a></h1><blockquote><p><strong>identityCodeValid</strong>(<code>code</code>): [<code>boolean</code>, <code>string</code>]</p></blockquote><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>code</code></td><td style="text-align:left;"><code>string</code> | <code>number</code></td><td style="text-align:left;"></td></tr></tbody></table><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>[<code>boolean</code>, <code>string</code>]</p><h1 id="该函数返回一个数组-true-或-false-身份证号格式错误" tabindex="-1">该函数返回一个数组 [true,&#39;&#39;] 或 [false,&quot;身份证号格式错误&quot;] <a class="header-anchor" href="#该函数返回一个数组-true-或-false-身份证号格式错误" aria-label="Permalink to &quot;该函数返回一个数组 [true,&#39;&#39;] 或 [false,&quot;身份证号格式错误&quot;]&quot;">​</a></h1><p>根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。 排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。 地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。 出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。 顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。顺序码的奇数分给男性，偶数分给女性。 校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。 出生日期计算方法。 15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个19或18,这样就包含了所有1800-1999年出生的人; 2000年后出生的肯定都是18位的了没有这个烦恼，至于1800年前出生的,那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗... 下面是正则表达式: 出生日期1800-2099 (18|19|20)?\\d{2}(0[1-9]|1[12])(0[1-9]|[12]\\d|3[01]) 身份证正则表达式 /^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[12])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$/i 15位校验规则 6位地址编码+6位出生日期+3位顺序号 18位校验规则 6位地址编码+8位出生日期+3位顺序号+1位校验位 校验位规则 公式:∑(ai×Wi)(mod 11)……………………………………(1) 公式(1)中： i----表示号码字符从由至左包括校验码在内的位置序号； ai----表示第i位置上的号码字符值； Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。 i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>身份证号合法性验证，支持15位和18位身份证号，支持地址编码、出生日期、校验位验证</p><h2 id="源码" tabindex="-1">源码 <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码&quot;">​</a></h2><p><a href="https://github.com/jackchoumine/petite-utils/blob/8e7c0010966f10f25edf6c36e28cb8812a3dcc37/src/type/identityCodeValid.ts#L32" target="_blank" rel="noreferrer">type/identityCodeValid.ts:32</a></p>',14)]))}const p=e(o,[["render",r]]);export{f as __pageData,p as default};
