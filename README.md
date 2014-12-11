# html-parts-form

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

## Bestanden
 * scss/components/_button.scss
 * scss/components/_form.scss
 * kit/includes/_contactform.kit

## Voorbeelden

### footer.kit
    <script>
        head.js(
            { cdnform: '//cdn.am-impact.nl/load.js?js=jsfw/form/validation.js&amp;js=jsfw/form/defaultvalue.js' }
        );
    </script>

### Javascript
###### Default value fallback
    if(!Modernizr.input.placeholder) {
        head.ready('cdnform', function() {
            $("[placeholder]").each(function() {
                $(this).defaultvalue();
            });
        });
    }

###### Validatie aanroepen
    $('.frm-contact').formValidation({
        attrPlaceholder: 'placeholder'
    });

###### Veld na validatie op niet required zetten
  	$('.frm-contact').data("validation").getField('naam').setRequired(false);

###### Validatie melding wijzigen
	FW.form.validation.validators._required.message = function( label ) {
        return label + ' moj wal invulln';
    }

###### Radio button validatie
	$('.frm-contact').find('input[type=radio]').on('change', function() {
		var $this = $(this),
			$input = $('.frm-contact').find('input[data-radioname="' + $this.attr('name') + '"]');

		if( $input.length ) {
			$input.attr('value', $this.val() );
		}
	});

###### Checkbox validatie
    $('.frm-contact').find('input[type=checkbox]').on('change', function() {
        var $this = $(this),
            $input = $('.frm-contact').find('input[data-checkname="' + $this.attr('name').replace('[]', '') + '"]'),
            checkedCount = $('.frm-contact').find('input[name="' + $this.attr('name') + '"]:checked').length;

        if( $input.length ) {
            $input.attr('value', (checkedCount > 0 ? '1' : ''));
        }
    });
