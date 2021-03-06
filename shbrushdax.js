/** 
 * @author
 * SQLBI - info@sqlbi.com
 * https://www.sqlbi.com
 * 
 * @version
 * 3.5
 * 
 * @update
 * May 9, 2020
*/

SyntaxHighlighter.brushes.DAX = function()
{
	var funcs = 'abs acos acosh acot acoth addcolumns addmissingitems all allcrossfiltered allexcept allnoblankrow allselected and approximatedistinctcount asin asinh atan atanh average averagea averagex beta.dist beta.inv blank calculate calculatetable calendar calendarauto ceiling chisq.dist chisq.dist.rt chisq.inv chisq.inv.rt closingbalancemonth closingbalancequarter closingbalanceyear coalesce combin combina combinevalues concatenate concatenatex confidence.norm confidence.t contains containsrow containsstring containsstringexact convert cos cosh cot coth count counta countax countblank countrows countx crossfilter crossjoin currency currentgroup customdata datatable date dateadd datediff datesbetween datesinperiod datesmtd datesqtd datesytd datevalue day degrees detailrows distinct distinctcount distinctcountnoblank divide earlier earliest edate endofmonth endofquarter endofyear eomonth error even exact except exp expon.dist fact false filter filters find firstdate firstnonblank firstnonblankvalue fixed floor format gcd generate generateall generateseries geomean geomeanx groupby hasonefilter hasonevalue hour if if.eager iferror ignore int intersect isblank iscrossfiltered isempty iserror iseven isfiltered isinscope islogical isnontext isnumber iso.ceiling isodd isonorafter isselectedmeasure issubtotal istext keepfilters keywordmatch lastdate lastnonblank lastnonblankvalue lcm left len ln log log10 lookupvalue lower max maxa maxx median medianx mid min mina minute minx mod month mround naturalinnerjoin naturalleftouterjoin nextday nextmonth nextquarter nextyear nonvisual norm.dist norm.inv norm.s.dist norm.s.inv not now odd openingbalancemonth openingbalancequarter openingbalanceyear or parallelperiod path pathcontains pathitem pathitemreverse pathlength percentile.exc percentile.inc percentilex.exc percentilex.inc permut pi poisson.dist power previousday previousmonth previousquarter previousyear product productx quarter quotient radians rand randbetween rank.eq rankx related relatedtable removefilters replace rept right rollup rollupaddissubtotal rollupgroup rollupissubtotal round rounddown roundup row sameperiodlastyear sample search second selectcolumns selectedmeasure selectedmeasureformatstring selectedmeasurename selectedvalue sign sin sinh sqrt sqrtpi startofmonth startofquarter startofyear stdev.p stdev.s stdevx.p stdevx.s substitute substitutewithindex sum summarize summarizecolumns sumx switch t.dist t.dist.2t t.dist.rt t.inv t.inv.2t tan tanh time timevalue today topn topnskip totalmtd totalqtd totalytd treatas trim true trunc unichar unicode union upper userelationship username userobjectid userprincipalname utcnow utctoday value values var.p var.s varx.p varx.s weekday weeknum xirr xnpv year yearfrac';

	var keywords = 'at asc boolean both by create currency datetime day define desc double evaluate false integer measure month none order return single start string table true var year';

    this.regexList = [
        { regex: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/).*)/gm,  css: 'comments' },		// Comment: #39A03B
        { regex: /"(?:[^"]|"")*"(?!")/gm,  css: 'string' },                                 // StringLiteral: #D93124 
        { regex: /'(?:[^']|'')*'(?!')(?:\[[ \w\xA0-\uFFFF]+\])?|\w+\[[ \w\xA0-\uFFFF]+\]/gm,  css: 'columns' },	// Column reference --> Columns/measures: #333333
        { regex: /\[[ \w\xA0-\uFFFF]+\]/gm,  css: 'measures' },                             // measure reference --> Columns/measures: #333333
        { regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions' },		    // Functions: #035ACA
        { regex: new RegExp(this.getKeywords(keywords), 'gmi'), css: 'keyword' },		    // Keyword: #035ACA
        { regex: /:=|[-+*\/=^]|\b(?:IN|NOT)\b/i, css: 'operator' },                         // Operator: #333333
        { regex: /\b\d+\.?\d*|\B\.\d+\b/i, css: 'number' },                                 // Number: #EE7F18
        { regex: /[\[\](){}`,.]/gm, css: 'parenthesis' }                                    // Parenthesis: #808080
		];
};

SyntaxHighlighter.brushes.DAX.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.DAX.aliases	= ['dax'];
