export function SoundCloud({ trackUrl }: { trackUrl?: string }) {
  if (!trackUrl) return null;

  const encodedUrl = encodeURIComponent(trackUrl);

  return (
    <div className="my-6">
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodedUrl}&color=%231ACE4A&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`}
        title="SoundCloud audio"
      />
    </div>
  );
}
