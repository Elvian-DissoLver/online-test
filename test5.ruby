require 'scanf'
def binary_search(array, value, low, high)
    if high < low
        return -1
    else
        mid = (low + high)/2
        if array[mid] > value
            return binary_search(array, value, low, mid-1)
        elsif array[mid] < value
            return binary_search(array, value, mid+1, high)
        else
            return mid
        end
    end
end
arr = Array.new()
10000.times {
    arr << gets.to_i
}
10000.times {
    value = gets.to_i
    answer = binary_search(arr, value, 0, 9999)
    puts answer
}