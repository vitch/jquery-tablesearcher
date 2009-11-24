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
				function(i){
				
					var searchTimeout;
					var $table = $(this);
					
					if (s.input == null) {
						throw new Error('Must provide an input element to bind to');
					};
					
					s.input.bind('keyup', function(){
						if (searchTimeout) {
							clearTimeout(searchTimeout);
						}
						searchTimeout = setTimeout(initSearch, 300);
					});
					
					var lastQ = '';
					
					function initSearch(){
						var q = s.input.val().toLowerCase();
						if (q == lastQ) 
							return;
						if (q == '') {
							$table.find('tbody tr').css('display', '');
						}
						else {
							//var tst = new RegExp(q, 'i');
							var i = 0;
							$table.find('tbody tr').each(function(){
								var $tr = $(this);
								var searchStr = $tr.text().toLowerCase();
								//var isMatch = tst.test(searchStr);
								var isMatch = searchStr.indexOf(q) > -1;
								$tr.css('display', isMatch ? '' : 'none');
							});
						}
						lastQ = q;
						searchTimeout = undefined;
					}
				}
			);
		}
	});
	$.fn.tablesearcher.defaults = {
		'input'	:	null
	};
	
})(jQuery);
