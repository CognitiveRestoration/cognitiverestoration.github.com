require "rubygems"
require "bundler/setup"

site = "dist"

desc "commit the website in the master branch"
task :build do
  require 'git'
  repo = Git.open('.')
  repo.branch("master").checkout
  (Dir["*"] - [site]).each { |f| rm_rf(f) }
  Dir["#{site}/*"].each {|f| mv(f, ".", :force => true, :verbose => true)}
  rm_rf(site)
  Dir["**/*"].each {|f| repo.add(f) }
  repo.status.deleted.each {|f, s| repo.remove(f)}
  message = ENV["MESSAGE"] || "Site updated at #{Time.now}"
  repo.commit(message)
  repo.branch("original-master").checkout
end

desc "generate and deploy website"
task :deploy => :build do
  system "git push origin master"
end




