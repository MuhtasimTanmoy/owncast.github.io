"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4323],{74323:function(e,t,n){function wordRegexp(e){return RegExp("^(("+e.join(")|(")+"))\\b")}n.r(t),n.d(t,{cython:function(){return s},mkPython:function(){return mkPython},python:function(){return a}});var r=wordRegexp(["and","or","not","is"]),o=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],i=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function top(e){return e.scopes[e.scopes.length-1]}function mkPython(e){for(var t="error",n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,a=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],s=0;s<a.length;s++)a[s]||a.splice(s--,1);var c=e.hangingIndent,l=o,u=i;void 0!=e.extra_keywords&&(l=l.concat(e.extra_keywords)),void 0!=e.extra_builtins&&(u=u.concat(e.extra_builtins));var p=!(e.version&&3>Number(e.version));if(p){var f=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;l=l.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),u=u.concat(["ascii","bytes","exec","print"]);var d=RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else{var f=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;l=l.concat(["exec","print"]),u=u.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var d=RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var m=wordRegexp(l),k=wordRegexp(u);function tokenBase(e,n){var r=e.sol()&&"\\"!=n.lastToken;if(r&&(n.indent=e.indentation()),r&&"py"==top(n).type){var o=top(n).offset;if(e.eatSpace()){var i=e.indentation();return i>o?pushPyScope(e,n):i<o&&dedent(e,n)&&"#"!=e.peek()&&(n.errorToken=!0),null}var a=tokenBaseInner(e,n);return o>0&&dedent(e,n)&&(a+=" "+t),a}return tokenBaseInner(e,n)}function tokenBaseInner(e,o,i){if(e.eatSpace())return null;if(!i&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var s=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(s=!0),e.match(/^[\d_]+\.\d*/)&&(s=!0),e.match(/^\.\d+/)&&(s=!0),s)return e.eat(/J/i),"number";var c=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(c=!0),e.match(/^0b[01_]+/i)&&(c=!0),e.match(/^0o[0-7_]+/i)&&(c=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),c=!0),e.match(/^0(?![\dx])/i)&&(c=!0),c)return e.eat(/L/i),"number"}if(e.match(d))return -1!==e.current().toLowerCase().indexOf("f")?o.tokenize=formatStringFactory(e.current(),o.tokenize):o.tokenize=tokenStringFactory(e.current(),o.tokenize),o.tokenize(e,o);for(var l=0;l<a.length;l++)if(e.match(a[l]))return"operator";return e.match(n)?"punctuation":"."==o.lastToken&&e.match(f)?"property":e.match(m)||e.match(r)?"keyword":e.match(k)?"builtin":e.match(/^(self|cls)\b/)?"self":e.match(f)?"def"==o.lastToken||"class"==o.lastToken?"def":"variable":(e.next(),i?null:t)}function formatStringFactory(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var o=1==n.length,i="string";function tokenNestedExpr(e){return function(t,n){var r=tokenBaseInner(t,n,!0);return"punctuation"==r&&("{"==t.current()?n.tokenize=tokenNestedExpr(e+1):"}"==t.current()&&(e>1?n.tokenize=tokenNestedExpr(e-1):n.tokenize=tokenString)),r}}function tokenString(a,s){for(;!a.eol();)if(a.eatWhile(/[^'"\{\}\\]/),a.eat("\\")){if(a.next(),o&&a.eol())return i}else if(a.match(n))return s.tokenize=r,i;else if(a.match("{{"))return i;else if(a.match("{",!1)){if(s.tokenize=tokenNestedExpr(0),a.current())return i;return s.tokenize(a,s)}else{if(a.match("}}"))return i;if(a.match("}"))return t;a.eat(/['"]/)}if(o){if(e.singleLineStringErrors)return t;s.tokenize=r}return i}return tokenString.isString=!0,tokenString}function tokenStringFactory(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var o=1==n.length,i="string";function tokenString(a,s){for(;!a.eol();)if(a.eatWhile(/[^'"\\]/),a.eat("\\")){if(a.next(),o&&a.eol())return i}else{if(a.match(n))return s.tokenize=r,i;a.eat(/['"]/)}if(o){if(e.singleLineStringErrors)return t;s.tokenize=r}return i}return tokenString.isString=!0,tokenString}function pushPyScope(e,t){for(;"py"!=top(t).type;)t.scopes.pop();t.scopes.push({offset:top(t).offset+e.indentUnit,type:"py",align:null})}function pushBracketScope(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(c||e.indentUnit),type:n,align:r})}function dedent(e,t){for(var n=e.indentation();t.scopes.length>1&&top(t).offset>n;){if("py"!=top(t).type)return!0;t.scopes.pop()}return top(t).offset!=n}function tokenLexer(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),o=e.current();if(n.beginningOfLine&&"@"==o)return e.match(f,!1)?"meta":p?"operator":t;if(/\S/.test(o)&&(n.beginningOfLine=!1),("variable"==r||"builtin"==r)&&"meta"==n.lastToken&&(r="meta"),("pass"==o||"return"==o)&&(n.dedent=!0),"lambda"==o&&(n.lambda=!0),":"==o&&!n.lambda&&"py"==top(n).type&&e.match(/^\s*(?:#|$)/,!1)&&pushPyScope(e,n),1==o.length&&!/string|comment/.test(r)){var i="[({".indexOf(o);if(-1!=i&&pushBracketScope(e,n,"])}".slice(i,i+1)),-1!=(i="])}".indexOf(o))){if(top(n).type!=o)return t;n.indent=n.scopes.pop().offset-(c||e.indentUnit)}}return n.dedent&&e.eol()&&"py"==top(n).type&&n.scopes.length>1&&n.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:tokenBase,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var o=tokenLexer(e,n);return o&&"comment"!=o&&(n.lastToken="keyword"==o||"punctuation"==o?e.current():o),"punctuation"==o&&(o=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:o},indent:function(e,t,n){if(e.tokenize!=tokenBase)return e.tokenize.isString?null:0;var r=top(e),o=r.type==t.charAt(0)||"py"==r.type&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return null!=r.align?r.align-(o?1:0):r.offset-(o?c||n.unit:0)},languageData:{autocomplete:o.concat(i).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}let a=mkPython({}),s=mkPython({extra_keywords:"by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE".split(" ")})}}]);