# SyntaxHighlighterBrushDax
Custom SyntaxHighlighter brush for DAX.

To use the DAX brush with SyntaxHighlighter WordPress plugin, add the following code to your functions.php:

```php
/*
 * Tell WordPress to load the brush file with SyntaxHighlighter plugin
 * Replace YOUR_BRUSH_DIRECTORY_URI with the URL path that contains the brush js file
 * E.g.: get_template_directory_uri() .'/js/shbrushdax.js'
*/
function my_syntaxhighlighter_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-dax', 'YOUR_BRUSH_DIRECTORY_URI/shbrushdax.js', array('syntaxhighlighter-core'), '1.0' );
}
add_action( 'init', 'my_syntaxhighlighter_regscript' );

/*
 * Define a brush shortcode
 */
function my_syntaxhighlighter_addlang( $brushes ) {
   $brushes['dax'] = 'dax';
   return $brushes;
}
add_filter( 'syntaxhighlighter_brushes', 'my_syntaxhighlighter_addlang' );
```
Use the brush in your posts with the following syntax:

```
[dax]your code here[/dax]
```

For more information, [read this article by Alex Mills](https://alex.blog/wordpress-plugins/syntaxhighlighter/adding-a-new-brush-language/).
