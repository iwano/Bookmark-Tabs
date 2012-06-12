module BookmarksHelper
	def show_rating_stars(rating)
		res=''
		rating.times do |number|
			res+='*'
		end
		res
	end
end
