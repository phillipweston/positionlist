# BOOYAAA!

get '/' do
  @list = Item.all.sort{|a,b| a.position <=> b.position }
  erb :index
end

post '/sort' do
  @array = params.to_a
  @array.each_with_index do |element, index|
    item = Item.find(element[1])
    item.position = index+1
    item.save
  end
  "hehehe"
end
