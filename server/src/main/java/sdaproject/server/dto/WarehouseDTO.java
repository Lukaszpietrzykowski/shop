package sdaproject.server.dto;

public class WarehouseDTO extends AbstractDTO{
    private ProductDTO productDTO;
    private Integer quantity;

    public ProductDTO getProductDTO() {
        return productDTO;
    }

    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
