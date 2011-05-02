require 'rubygems' if RUBY_VERSION < '1.9'
require 'sinatra/base'
require 'erb'

class NatPersonalTrainerApp < Sinatra::Base
  set :static, true
  set :public, File.dirname(__FILE__) + '/static'

  get '/20110421' do
    erb(:newsletter_20110421)
  end

  post '/facebook' do
    erb(:facebook)
  end
end