<?php
/**
 * The template for displaying search results.
 *
 * @package Waipoua
 * @since Waipoua 1.0
 */

get_header(); ?>

	<div id="content">

		<?php if ( have_posts() ) : ?>
		<header class="page-header">
			<h2 class="page-title"><?php echo $wp_query->found_posts; ?> <?php printf( __( 'Search Results for &lsquo;%s&rsquo;', 'waipoua' ), '<span>' . get_search_query() . '</span>' ); ?></h2>
		</header><!--end .page-header -->

			<?php /* Start the Loop */ ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php	get_template_part( 'content', get_post_format() ); ?>

			<?php endwhile; // end of the loop. ?>

			<?php waipoua_content_nav( 'nav-below' ); ?>

			<?php else : ?>

			<article id="post-0" class="page no-results not-found">		
				<header class="entry-header">
					<h1 class="entry-title"><?php _e( 'Nothing Found', 'waipoua' ); ?></h1>
				</header><!--end .entry-header -->
				<div class="entry-content">
					<p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'waipoua' ); ?></p>
				</div><!-- end .entry-content -->				
			</article>

		<?php endif; ?>

	</div><!-- end #content -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>