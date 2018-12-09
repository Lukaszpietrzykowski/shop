package sdaproject.server.entity;


import javax.persistence.*;

@Entity
@Table(name = "warehouse")
public class WarehouseEntity extends AbstractEntity {
    @OneToOne
    @JoinColumn(name = "product_id")
    private ProductEntity productEntity;

    @Column
    private Integer quantity;

    public ProductEntity getProductEntity() {
        return productEntity;
    }

    public void setProductEntity(ProductEntity productEntity) {
        this.productEntity = productEntity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
