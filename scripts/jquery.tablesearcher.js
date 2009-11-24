/* Copyright (c) 2009 Kelvin Luck (kelvin AT kelvinluck DOT com || http://www.kelvinluck.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * See http://kelvinluck.com/assets/jquery/tablesearcher/
 */

;(function($)
{

	$.fn.extend({
		'tablesearcher' : function(s)
		{
			s = $.extend({}, $.fn.tablesearcher.defaults, s);
			return this.each(
				function(i)
				{
					
				}
			);
		}
	});
	$.fn.tablesearcher.defaults = {
		'blah' : 1,
		'blaj' : 2
	};
	
})(jQuery);
