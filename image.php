<?php
/**
 * The template for displaying image attachments.
 *
 * @package Waipoua
 * @since Waipoua 1.0
 */

get_header(); ?>

<div id="content">

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<header class="entry-header">
			<h1 class="entry-title"><?php the_title(); ?></h1>
		</header><!--end .entry-header -->

		<div class="entry-content clearfix">
			<div class="attachment">
<?php
	/**
	 * Grab the IDs of all the image attachments in a gallery so we can get the URL of the next adjacent image in a gallery,
	 * or the first image (if we're looking at the last image in a gallery), or, in a gallery of one, just the link to that image file
	 */
	$attachments = array_values( get_children( array( 'post_parent' => $post->post_parent, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => 'ASC', 'orderby' => 'menu_order ID' ) ) );
	foreach ( $attachments as $k => $attachment ) {
		if ( $attachment->ID == $post->ID )
			break;
	}
	$k++;
	// If there is more than 1 attachment in a gallery
	if ( count( $attachments ) > 1 ) {
		if ( isset( $attachments[ $k ] ) )
			// get the URL of the next image attachment
			$next_attachment_url = get_attachment_link( $attachments[ $k ]->ID );
		else
			// or get the URL of the first image attachment
			$next_attachment_url = get_attachment_link( $attachments[ 0 ]->ID );
	} else {
		// or, if there's only 1 image, get the URL of the image
		$next_attachment_url = wp_get_attachment_url();
	}
?>
						<a href="<?php echo $next_attachment_url; ?>" title="<?php echo esc_attr( get_the_title() ); ?>"><?php
							$attachment_size = apply_filters( 'theme_attachment_size', 1200 );
							echo wp_get_attachment_image( $post->ID, array( $attachment_size, 1200 ) ); // filterable image width with 1200px limit for image height.
						?></a>

						<?php if ( ! empty( $post->post_excerpt ) ) : ?>
							<div class="entry-caption">
								<?php the_excerpt(); ?>
							</div>
						<?php endif; ?>
					</div><!-- .attachment -->
				</div><!-- .entry-content -->
				
				<footer class="entry-meta">
					<ul>
						<?php
						$metadata = wp_get_attachment_metadata();
						printf( __( '<li class="image-size"><span>Image Size:</span> <a href="%3$s" title="Link to full-size image">%4$s&times;%5$s pixels</a> </li>
						<li><span>Posted in:</span> <a href="%6$s" title="%7$s">%7$s</a></li>', 'waipoua' ),
							esc_attr( get_the_time() ),
							get_the_date(),
							esc_url( wp_get_attachment_url() ),
							$metadata['width'],
							$metadata['height'],
							esc_url( get_permalink( $post->post_parent ) ),
							get_the_title( $post->post_parent )
							);
						?>
					</ul>
				</footer><!-- .entry-meta -->
		
		</article><!-- #post-<?php the_ID(); ?> -->


			<?php comments_template(); ?>
			
			<nav id="image-nav"  class="clearfix">
				<div class="previous-image"><?php previous_image_link( '%link', __( '&larr; Previous Image', 'waipoua' )); ?></div>
				<div class="next-image"><?php next_image_link(  '%link', __( 'Next Image &rarr;', 'waipoua' ) ); ?></div>
			</nav><!-- #image-nav -->

	</div><!-- end #content -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>