# Stupid Shit No One In Hawaii Needs and Terrible Ideas Hackathon

The site for a one-day hackathon in Honolulu in January 2017, for projects with
no value whatsoever. Ray Farias and I put it on. It's plain HTML, CSS and
JavaScript on GitHub Pages at
[stupidshitnooneinhawaiineedshackathon.github.io](https://stupidshitnooneinhawaiineedshackathon.github.io/),
with every entry, the winners and the names of everyone who built them.

![The hackathon's site: "Stupid Shit No One In Hawaii Needs and Terrible Ideas Hackathon" in red brush letters on lime green, then quick cuts through the 2017 entries as the page breaks, its fonts turning to Comic Sans, everything tilting and flashing, until it all falls down the screen on "Thanks Y'all!"](.github/readme/2026-11-recording.gif)

## Artist statement

In 2016 Ray and I went to a new hackathon about once or twice a month, and most
of them were sponsored by a company that wanted something back: free
development work, developers using its product, or new hires. Ray Farias and I
put on the Stupid Shit No One In Hawaii Needs and Terrible Ideas Hackathon to
do the opposite. Everyone there was building for the joy of making something,
not for profit or glory.

[Read the full statement](https://www.joekarlsson.com/work/stupid-hackathon-hawaii/).

## Run it locally

There's no build step. Serve the folder and open <http://localhost:8000>:

```bash
git clone https://github.com/STUPIDSHITNOONEINHAWAIINEEDSHACKATHON/STUPIDSHITNOONEINHAWAIINEEDSHACKATHON.github.io.git
cd STUPIDSHITNOONEINHAWAIINEEDSHACKATHON.github.io
python3 -m http.server
```

Every push to `master` goes live on GitHub Pages.
