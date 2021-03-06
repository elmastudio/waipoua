<?php
/**
 * The template for displaying all pages.
 *
 * @package Waipoua
 * @since Waipoua 1.0
 */

get_header(); ?>

	<div id="content">

		<?php /* Start the Loop */ ?>
		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'page' ); ?>

			<?php comments_template( '', true ); ?>

		<?php endwhile; // end of the loop. ?>

	</div><!-- end #content -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>