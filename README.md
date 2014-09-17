# html-parts-form

Uitbreiding op [html startup](https://github.com/am-impact/html-startup)

## Bestanden
 * resources/sass/components/_buttons.scss
 * resources/sass/components/_form.scss
 * resources/scripts/fw.form.js

## Voorbeelden

### Html
 	<form action="#" method="post" class="frm-contact">
        <fieldset>
            <legend>Algemene gegevens</legend>
            <ul>
                <li class="form__row">
                    <div class="label"><label for="frm_naam" class="required">Naam</label></div>
                    <div class="field"><input type="text" name="naam" id="frm_naam" data-required="true"></div>
                </li>
                <li class="form__row">
                    <div class="label"><label for="frm_email" class="required">E-mailadres</label></div>
                    <div class="field"><input type="email" name="email" id="frm_email" data-required="true" data-validation="email"></div>
                </li>
                <li class="form__row">
                    <div class="label"><label class="required">Radiobuttons</label></div>
                    <div class="field">
						<label><input type="radio" name="radiobuttonname" value="Ja"> Ja</label>
						<label><input type="radio" name="radiobuttonname" value="Nee"> Nee</label>
						<input type="hidden" name="radiovalue" value="" data-radioname="radiobuttonname" data-required="true">
                    </div>
                </li>
                <li class="form__row">
                    <div class="label"><label for="frm_reactie" class="required">Reactie</label></div>
                    <div class="field"><textarea name="reactie" id="frm_reactie" cols="20" rows="5" data-required="true"></textarea></div>
                </li>
            </ul>
        </fieldset>
        <p class="form__note">Velden met een * zijn verplicht</p>
        <div class="button__row">
            <input type="submit" name="verzenden" value="Verzenden">
        </div>
    </form>

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>
        head.js(
            { cdnform: '//cdn.am-impact.nl/load.js?js=jsfw/form/validation.js&amp;js=jsfw/form/defaultvalue.js' },
            { form: 'scripts/fw.form.js' }
        );
    </script>
### Scss
###### _settings.scss
    $colors: (
        form: (
            placeholder: #999,
            error: #C00
        )
    )

### Javascript
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