module BookmarksHelper
	def show_rating_stars(rating)
		res=''
		rating.times do |number|
			res+='*'
		end
		res
	end

	def random_page
		bookmarks = current_user.bookmarks
		noBookmarks = current_user.bookmarks.count
		bookmarks[rand(noBookmarks) - 1].url unless noBookmarks == 0
	end
end
