task :default do
  puts "Running CI tasks "

  sh("JEKYLL_ENV=production bundle exec jekyll build")
  puts "Jekyll build is success"
end

require 'html-proofer'

task :test do
  HTMLProofer.check_directories(
    ["./_site"], {
      :allow_hash_href => true,
      :parallel => {:in_processes => 4},
      :only_4xx => true,
      :url_ignore => [/(twitter|instagram|sktchy|mix.fiftythree|paper.fiftythree).com/],
      :empty_alt_ignore => false,
      :verbose => true,
      :typhoeus => {
        :timeout => 3 }
    }).run
end